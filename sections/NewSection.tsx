interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Capy!!!!" }: Props) {
  return <div>Hello world: {name}</div>;
}
