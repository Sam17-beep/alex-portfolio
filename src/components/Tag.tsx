interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <h2 className="bg-charcoal text-beige hover:bg-beige-moyen hover:text-charcoal inline-flex w-fit cursor-default items-center justify-center rounded-full px-[20px] py-[10px]">
      {text}
    </h2>
  );
};
