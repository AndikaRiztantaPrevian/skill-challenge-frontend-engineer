import Icons from "../icon/Icons";

const Header = () => {
  return (
    <>
      <header className="bg-primary-gray-darken h-[7.25%] shadow-sm flex items-center px-7">
        <button type="button">
          <Icons.SearchIcon width={21} height={20} color={`#F2F2F2`} />
        </button>
      </header>
    </>
  );
};

export default Header;
