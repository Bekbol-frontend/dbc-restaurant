import { Heading } from "@/shared/ui/Heading";
import { Label } from "@/shared/ui/Label";
import { Paragraph } from "@/shared/ui/Paragraph";

function App() {
  return (
    <div>
      <Heading>Heading Large</Heading>
      <Heading type="medium">Heading medium</Heading>
      <Heading type="small">Heading small</Heading>
      <br />
      <Label>Label Large</Label>
      <Label type="medium">Label medium</Label>
      <Label type="small">Label small</Label>

      <br />

      <Paragraph>Paragraph Large</Paragraph>
      <Paragraph type="medium">Paragraph medium</Paragraph>
      <Paragraph type="small">Paragraph small</Paragraph>
    </div>
  );
}

export default App;
