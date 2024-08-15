type Props = { name: string; alt: string };

export default function Icon({ name, alt }: Props) {
  return <img src={`/icons/${name}.svg`} alt={alt} width={24} height={24} />;
}
