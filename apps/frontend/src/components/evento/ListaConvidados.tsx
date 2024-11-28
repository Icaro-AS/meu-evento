<<<<<<< HEAD
import { Convidado } from "core";
=======
import { Convidado } from "@/core";
>>>>>>> e1d2c3fdb8db39e2b06011915fc1a45802b01a3d
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps {
  convidados: Convidado[];
}

export default function ListaConvidados(props: ListaConvidadosProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
}
