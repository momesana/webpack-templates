interface Props {
  name?: string;
}

export default function Greetings({ name = "stranger" }: Props): JSX.Element {
  return (
    <div>
      Greetings {name}! I am a humble component. Nothing more, nothing less.
    </div>
  );
}
