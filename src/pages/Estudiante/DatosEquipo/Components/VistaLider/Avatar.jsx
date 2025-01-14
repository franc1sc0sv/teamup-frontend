import { useModal } from "src/store/useModal";
import Button from "../../../../../components/ui/Button";

const Avatar = ({ avatar_url }) => {
  const { toggleModal } = useModal();
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-[#828282] text-4xl font-bold text-center">
        Avatar de equipo
      </h1>

      <div className="w-[220px] border-2 border-[#CECECE] rounded-md p-3 grid place-items-center">
        <img
          src={import.meta.env.VITE_URL + avatar_url}
          alt="Preview"
          className="object-cover w-[128px] h-[128px]"
          style={{
            clipPath: "circle(50% at 50% 50%)", // Aplicar la máscara circular
          }}
        />
      </div>
      <Button
        textButton={"Cambiar avatar"}
        onClickButton={() => {
          toggleModal("CambiarAvatar");
        }}
        px={20}
        type={"button"}
      />
    </div>
  );
};

export default Avatar;
