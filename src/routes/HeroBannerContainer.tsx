interface HeroBannerContainerProps {
  children: React.ReactNode;
}

export const HeroBannerContainer = ({ children }: HeroBannerContainerProps) => {
  return (
    <div className="absolute top-[161px] left-[174px] flex h-[340px] flex-col gap-[30px]">
      {children}
    </div>
  );
};
