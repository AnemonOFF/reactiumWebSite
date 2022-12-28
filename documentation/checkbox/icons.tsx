import { AiFillSetting } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from "reactiumui";

const ExampleIcons: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Checkbox icon={<AiFillSetting />}>Icon checkbox</Checkbox>
            <Checkbox icon={<MdFavoriteBorder />} checkedIcon={<MdFavorite />}>Checkable icon checkbox</Checkbox>
            <Checkbox icon={<MdFavoriteBorder />} color="success">Success checkbox</Checkbox>
        </div>
    )
}

export default ExampleIcons;