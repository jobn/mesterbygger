import React from "react";
import { List } from "semantic-ui-react";

const maxDepth = 2;

const sortByName = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA > nameB) {
    return 1;
  }

  if (nameB > nameA) {
    return -1;
  }

  return 0;
};

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
