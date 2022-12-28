import { Input } from "reactiumui";
import { MdKeyboardVoice } from "react-icons/md";

const ExamplePrePost: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input placeholder="yoursite" prefix="https://" postfix=".com" />
            <Input placeholder="voice search" postfix={<MdKeyboardVoice />} />
        </div>
    )
}

export default ExamplePrePost;