const SectionHeader = ({info}) => {
  return (
    <div className="font-open-sans">
      <h1 className="text-center text-[40px] font-bold">{info.heading}</h1>
      <p className="text-center text-paragraph py-2">
        {info.descrip}{" "}
      </p>
    </div>
  );
};

export default SectionHeader;
