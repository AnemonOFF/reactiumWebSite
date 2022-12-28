import { Button } from "reactiumui";
import { AiFillCaretDown, AiFillSetting } from "react-icons/ai";

const ExampleIcons: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button icon={<AiFillSetting />}>Default icon</Button>
            <Button type="light" icon={<AiFillSetting />}>Icon with light button</Button>
            <Button type="text" rightIcon={<AiFillSetting />}>Right icon with text button</Button>
            <Button type="border" rightIcon={<AiFillCaretDown />}>Right icon</Button>
            <Button type="flat" icon={<AiFillSetting />} rightIcon={<AiFillCaretDown />}>Both icons</Button>
            <Button type="ghost" icon={<AiFillSetting />} iconSize={40}>Custom icon size</Button>
        </div>
    )
}

export default ExampleIcons;