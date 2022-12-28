import { Input } from "reactiumui";
import { MdKeyboardVoice } from "react-icons/md";

const ExampleTextColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input textColor="secondary" placeholder="yoursite" postfix=".com" />
            <Input textColor="green600" placeholder="voice search" postfix={<MdKeyboardVoice />} />
        </div>
    )
}

export default ExampleTextColors;