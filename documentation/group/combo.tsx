import { Input, Group, Button } from "reactiumui";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const ExampleCombo: React.FunctionComponent = () => {
    return (
        <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center' }}>
            <Group>
                <Input placeholder="first" />
                <Button>search</Button>
            </Group>
            <Group>
                <Input placeholder="first" postfix={<MdKeyboardVoice />} />
                <Button icon={<AiOutlineSearch />} />
            </Group>
        </div>
    )
}

export default ExampleCombo;