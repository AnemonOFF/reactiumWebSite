import { Input } from "reactiumui";
import { MdKeyboardVoice } from "react-icons/md";

const ExampleColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input color="secondary" placeholder="yoursite" postfix=".com" />
            <Input color="green600" placeholder="voice search" postfix={<MdKeyboardVoice />} />
        </div>
    )
}

export default ExampleColors;