/* eslint-disable react/prop-types */
import TextIcon from ".";

const ListTextIcon = ({ data, handleNavigate }) => {
  return (
    <div className="flex flex-col gap-4 relative top-10">
      {data.map((item) => {
        return (
          <TextIcon
            key={item.id}
            title={item.title}
            onClick={() => handleNavigate(item.title)}
          >
            {item.icon}
          </TextIcon>
        );
      })}
    </div>
  );
};

export default ListTextIcon;
