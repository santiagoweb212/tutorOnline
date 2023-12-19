import { postLoginUser } from "@/api/api";
import BotonTutor from "@/components/botonTutor";
import ErrorForm from "@/components/ui/errorForm";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import useDataForm from "@/hooks/useDataForm";
import { useAuthToken } from "@/store/userTokenStore";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const setAuthToken = useAuthToken((store) => store.setAuthToken);
  const navigate = useNavigate();
  const initialDataForm = {
    email: "",
    password: "",
  };
  const { dataForm, handleChangeDataForm, error } =
    useDataForm(initialDataForm);
    const mutation = useMutation({
        mutationFn: postLoginUser,
      });
      const handleSubmit = async (event) => {
        event.preventDefault();
        
        mutation.mutate(dataForm, {
          onSuccess: (res) => {
            setAuthToken(res?.data?.token);
            navigate("/");
          },
          onError: (error) => {
            const status = error?.response?.status;
            const errorMessage =
              error?.response?.data?.error || "Error desconocido"; // Ajusta esto según la estructura de tu respuesta de error
            if (status === 401|| status===400) {
              Swal.fire("Error", errorMessage, "error");
            }
          },
        });
      };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="ingrese su email"
          onChange={handleChangeDataForm}
          name="email"
          value={dataForm.email}
          styleError={error.email}
        />
        {error.email && <ErrorForm error={error.email} />}
      </div>

      <div className="">
        <Label>Contraseña</Label>
        <Input
          placeholder="ingrese su contraseña"
          onChange={handleChangeDataForm}
          name="password"
          value={dataForm.password}
          styleError={error.password}
        />
        {error.password && <ErrorForm error={error.password} />}
      </div>
      <BotonTutor texto="iniciar session" />
    </form>
  );
};

export default Form;
