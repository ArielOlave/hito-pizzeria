import React, { useEffect, useState } from "react";
import { usarUsuario } from "../context/UserContext";

const Profile = () => {
  const { email, fetchProfile, logout } = usarUsuario();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (error) {
        console.error("Error al cargar perfil:", error);
      }
    };
    loadProfile();
  }, [fetchProfile]);

  return (
    <div>
      <h1>Perfil</h1>
      <p>Correo: {email}</p>
      {profile && <p>Información adicional: {JSON.stringify(profile)}</p>}
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
