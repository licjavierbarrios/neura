import Link from "next/link";
import ButtonPrimary from "../ui/ButtonPrimary";

const Contacto = () => {
  return (
    <Link href='/contact'>
      <ButtonPrimary title="Contacto" type="button" />
    </Link>
  );
}

export default Contacto;