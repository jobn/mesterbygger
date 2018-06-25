import React from "react";
import { List } from "semantic-ui-react";
import { sortByName } from "./utils";

const maxDepth = 2;

const Theme = ({ id, name, subThemes, allThemes, depth }) => (
  <List.Item>
    {name} - {id}
    {subThemes &&
      depth < maxDepth && (
        <SubThemeList
          themes={subThemes}
          allThemes={allThemes}
          depth={depth + 1}
        />
      )}
  </List.Item>
);

const SubThemeList = ({ themes, allThemes, depth }) => (
  <List.List>
    {themes.map(theme => (
      <Theme
        {...theme}
        subThemes={allThemes.filter(
          subTheme => subTheme.parent_id === theme.id
        )}
        allThemes={allThemes}
        depth={depth}
      />
    ))}
  </List.List>
);

const ThemeList = ({ themes }) => (
  <List bulleted>
    {themes
      .filter(theme => theme.parent_id == null)
      .sort(sortByName)
      .map(theme => (
        <Theme
          {...theme}
          subThemes={themes.filter(subTheme => subTheme.parent_id === theme.id)}
          allThemes={themes}
          depth={1}
        />
      ))}
  </List>
);

export default ThemeList;
