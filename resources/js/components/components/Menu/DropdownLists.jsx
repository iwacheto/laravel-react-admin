import React, { useState } from 'react';
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import styles from "../../assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function DropdownLists(props) {

  // console.log(props.isShowMenu)
  const classes = useStyles();
  // const [isShowMenu, setShowMenu] = useState(false);
  let activePro = " ";

  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;

  return (
    <div className={'sidebar_submenu' + (props.isShow ? ' active_submenu' : '')}>
      {props.lists.map((subLink, key) => {
        // console.log(subLink)
        let listItemClasses;
        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(subLink.layout + subLink.path)
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(subLink.layout + subLink.path)
        });
        return (
          <NavLink
            to={subLink.layout + subLink.path}
            // className={activePro + classes.item}
            className=" makeStyles-item-15"
            activeClassName="active"
            key={key}
          >

            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof subLink.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: subLink.rtlActive
                  })}
                >
                  {subLink.icon}
                </Icon>
              ) : (
                  <subLink.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: subLink.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? subLink.rtlName : subLink.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>


        );
      })}

      <NavLink to="/admin/test" className=" makeStyles-item-15" activeClassName="active">
       Pesho
      </NavLink>
    </div>
  )
}
