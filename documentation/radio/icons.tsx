import { AiFillSetting } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Radio } from "reactiumui";

const ExampleIcons: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Radio icon={<AiFillSetting />}>Icon radio</Radio>
            <Radio icon={<MdFavoriteBorder />} checkedIcon={<MdFavorite />}>Checkable icon radio</Radio>
            <Radio icon={<MdFavoriteBorder />} color="success">Success radio</Radio>
        </div>
    )
}

export default ExampleIcons;