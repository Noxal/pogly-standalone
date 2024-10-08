import ElementData from "../../module_bindings/element_data";
import { styled } from "styled-components";
import { TextCategory } from "./Categories/TextCategory";
import { ImageCategory } from "./Categories/ImageCategory";
import { ChannelEmoteCategory } from "./Categories/ChannelEmoteCategory";
import { WidgetCategory } from "./Categories/WidgetCategory";
import { ElementSelectionContextMenu } from "./ContextMenus/ElementSelectionContextMenu";
import { useContext, useEffect, useState } from "react";
import { ElementSelectionMenuFooter } from "./ElementSelectionMenuFooter";
import PermissionLevel from "../../module_bindings/permission_level";
import Config from "../../module_bindings/config";
import Permissions from "../../module_bindings/permissions";
import { useSpacetimeContext } from "../../Contexts/SpacetimeContext";
import { TenorCategory } from "./Categories/TenorCategory";
import { ConfigContext } from "../../Contexts/ConfigContext";
import { LayoutCategory } from "./Categories/LayoutCategory";
import { Divider, Typography } from "@mui/material";

interface IProps {
  elementData: ElementData[];
  isDropping: boolean;
}

export const ElementSelectionMenu = (props: IProps) => {
  const { Identity } = useSpacetimeContext();
  const config: Config = useContext(ConfigContext);

  const [contextMenu, setContextMenu] = useState<any>(null);

  const strictSettings: { StrictMode: boolean; Permission?: PermissionLevel } = {
    StrictMode: Config.findByVersion(0)!.strictMode,
    Permission: Permissions.findByIdentity(Identity.identity)?.permissionLevel,
  };

  return (
    <>
      <SelectionMenuContainer id="SelectionMenu">
        <CategoryContainer>
          <LayoutCategory />

          <Divider
            sx={{
              ":before": { borderTopColor: "#ffffffa6" },
              ":after": { borderTopColor: "#ffffffa6" },
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            <Typography sx={{ color: "#ffffffa6" }} variant="inherit">
              Elements
            </Typography>
          </Divider>

          <TextCategory />

          <div style={{ borderStyle: `${props.isDropping ? "dashed" : "none"}`, borderColor: "green" }}>
            <ImageCategory
              elementData={props.elementData}
              strictSettings={strictSettings}
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
            />
          </div>

          <WidgetCategory
            elementData={props.elementData}
            strictSettings={strictSettings}
            contextMenu={contextMenu}
            setContextMenu={setContextMenu}
          />

          {config.streamingPlatform === "twitch" && <ChannelEmoteCategory />}

          <TenorCategory />
        </CategoryContainer>

        <ElementSelectionMenuFooter />
      </SelectionMenuContainer>

      <ElementSelectionContextMenu contextMenu={contextMenu} setContextMenu={setContextMenu} />
    </>
  );
};

const SelectionMenuContainer = styled.div`
  background-color: #001529;

  width: 218px;
  height: 95vh;

  position: fixed;
  overflow-y: auto;

  padding-top: 10px;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const CategoryContainer = styled.div`
  max-height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
