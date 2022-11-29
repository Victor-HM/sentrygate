// React imports
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../hooks/responses/NotFound";
import { Call } from "../../pages/call/Call";
import { InsertActivity } from "../../pages/insertActivity";

import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";

// Global
import { Stack } from "@mui/material";

export default function RouteNavigation () {

  return (
  
    <Stack sx={{flexDirection: 'row', width: '100vw'}}>

      <LeftBar />
      
      <Stack sx={{width: '100%'}}>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/login" element={<Form />} />
          <Route path="/insert/student" element={<RegisterStudent />} />
          <Route path="/insert/teacher" element={<RegisterTeacher />} />
          <Route path="/insert/activity" element={<InsertActivity />} />
          <Route path="/quest" element={<Call />} />
          <Route path="/report" element={<Boletim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Stack>

    </Stack>

  );
}