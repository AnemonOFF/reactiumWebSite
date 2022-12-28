import { Input } from "reactiumui";
import { MdKeyboardVoice } from "react-icons/md";

const ExampleFontAndBorder: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input placeholder="xs font" fontSize="xs" />
            <Input placeholder="sm extrabold font" fontSize="sm" fontWeight="extrabold" />
            <Input placeholder="md font" fontSize="md" />
            <Input placeholder="lg font + normal border" fontSize="lg" borderWidth="normal" />
            <Input placeholder="xl font extrabold" size="xl" fontSize="xl" borderWidth="extrabold" postfix={<MdKeyboardVoice />} iconSize={30} />
        </div>
    )
}

export default ExampleFontAndBorder;