'use client'

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    className?: string;
  }
  
export const LoadingSpinner = ({
  }: ISVGProps) => {
    return (
      <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    </svg>
    );
  };