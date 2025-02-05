"use client"
import { useEffect, useState } from "react";
import Container from "./atoms/Container/page";
import SubHeading from "./atoms/Subheading/page";
import Cards from "./molecules/Card";
import MainBanner from "./molecules/MainBanner";
import Tabs from "./molecules/Tabs";
import { sendRequest } from "./lib/helper";
import { useSelector } from "react-redux";

const Home = () => {
  const gardient = 'bg-gradient-to-r from-[#FAF2EB] via-[#FAE7F8] to-[#E1F2FA]'

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const recipesData = await sendRequest({ uri: "https://dummyjson.com/recipes?limit=12" });
    setRecipes(recipesData.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []); 

  useEffect(() => {
    console.log('Recipes:', recipes);
  }, [recipes]); 


  const [week, setWeek] = useState(0)
  const [Weekdata, setWeekdata] = useState()
  const [ids, setIds] = useState<number[]>([]);

  const addId = (newId: number) => {
    setIds((prevIds) => [...prevIds, newId]);
    console.log(ids);
  };
  const weeksState = useSelector((state: any) => state.recipes); 

  useEffect(()=>{
    setWeekdata(weeksState[`week${week}`])
    console.log(Weekdata);
  },[week])

  return (
    <div className="h-screen overflow-x-hidden no-scrollbar">
      <MainBanner />
        <Container className={` ${gardient} flex items-center py-[30px]`}>
          <SubHeading heading="Week Orders" />
        </Container>
        <Container>
          <Tabs ids={ids} setWeek={setWeek} setIds={setIds} />
        </Container>
        <Container className={`${gardient} py-20`} subClasses='flex justify-between flex-wrap'>
          {week == 0 ? recipes?.map((item : any , key : number)=>{
            return <Cards key={key} item={item} setIds={addId}/>
          }):
          recipes?.map((item : any , key : number)=>{
            if (Weekdata?.includes(item.id)) {
            return <Cards key={key} item={item} setIds={addId} inweek={true} week={week}/>
            }
          })
        }
        </Container>
    </div>
  );
};
export default Home;
