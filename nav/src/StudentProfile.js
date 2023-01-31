import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";

const Container1 = styled.div`
  margin-left: 240px;
  background: #f8f8f8;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: 100%;
  width: 80%;
  padding: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
`;
const UserBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  align-items: center;
`;
const RightSection = styled.div`
  display: flex;
  margin-left: 20px;
  padding: 10px;
  align-items: center;
`;
const UserIcon = styled.div`
  font-size: 40px;
`;
const UserInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  font-size: 10px;
  flex-wrap:wrap;
  
`;

const UserName = styled.span`
  color: #777C88;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
`;

const UserRole = styled.span`
  color: #F0634C;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
`;

const LeftSection = styled.div`
  margin-right: 30px;
`;
const SettingsIcon = styled.div`
   color: #F0634C;
   font-size: 30px;
`;

function StudentProfile() {
  return (
    <>
    <Container1>
      <UserBar >
        <RightSection >
          <IconButton>  
          <UserIcon >
            <FaUserCircle  style={{ fontSize: "50px", color: '#777C88' }}/>  
          </UserIcon>
          </IconButton>
          <UserInfo>
            <UserName>Username</UserName>
            <UserRole>Student</UserRole>
          </UserInfo>
        </RightSection>
        <LeftSection>
          <SettingsIcon>
            
            <MdSettingsApplications style={{ fontSize: "35px"}}/>
            
          </SettingsIcon>
        </LeftSection>
      </UserBar>
    </Container1>
    

    
</>
   
    


  );
}

export default StudentProfile;
