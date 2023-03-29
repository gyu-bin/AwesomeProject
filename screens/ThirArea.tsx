import React from 'react';
import {View,Text} from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons, Feather, MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  display: flex;
  flex: 1;
`

const HomeText = styled.Text`
  margin: auto;
  font-size: 20px;
  color: black;
`
const UserInfoSection = styled.View`
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
  padding: 0px 20px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  elevation: 10;
`;

const InfoBox = styled.View`
  align-items: flex-start;
  justify-content: center;
`;


const MenuWrapper = styled.View`
  margin-top: 3px;
`;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 17px 10px 20px;
  justify-content: center;
  align-items: center;
`;

const MenuItemText =  styled.Text`
  color: #2e2e2e;
  font-size: 16px;
  line-height: 22px;
  margin-left: 10px;
`;

const TouchMenu = styled.View`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
  justify-content: center;
`;

const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: flex-end;
  width: 76px;
  height: 27px;
  padding-bottom: 2px;
  margin: 13px 22px 10px 0px;
  border-radius: 15px;
  background-color: #000;
`;

const LogoutText =  styled.Text`
  text-align: center;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`;

const ChevronBox = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const EditBox = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  margin-top: 3px;
`;

interface ProfileEditItem {
  icon: React.ReactNode;
  title: string;
  screen?: string;
  onPress?: () => void;
}

const ThirArea = () => {
  const iconSize = 18;

  const items: ProfileEditItem[] = [
    {
      icon: <MaterialIcons name="lock" color="#2E2E2E" size={iconSize} />,
      title: "1",
      screen: "Account",
    },
    {
      icon: <MaterialIcons name="star" color="#2E2E2E" size={iconSize} />,
      title: "2",
      screen: "MyClub",
    },
    {
      icon: <MaterialIcons name="notifications" size={iconSize} color="#2E2E2E" />,
      title: "3",
      screen: "NotificationSetting",
    },
    {
      icon: <MaterialIcons name="textsms" color="#2E2E2E" size={iconSize} />,
      title: "4",
      screen: "Suggestion",
    },
    {
      icon: <MaterialIcons name="info" color="#2E2E2E" size={iconSize} />,
      title: "5",
      screen: "Info",
    },
  ];

  return (
    <Container>
      <MenuWrapper>
        {items?.map((item: ProfileEditItem, index: number) => (
          <TouchMenu key={index}>
            <MenuItem>
              {item.icon}
              <MenuItemText>{item.title}</MenuItemText>
              <ChevronBox>
                <Feather name="chevron-right" color="#CCCCCC" size={22} />
              </ChevronBox>
            </MenuItem>
          </TouchMenu>
        ))}
      </MenuWrapper>
    </Container>
  )
}

export default ThirArea;
