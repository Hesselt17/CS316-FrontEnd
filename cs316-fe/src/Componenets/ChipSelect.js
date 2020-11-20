import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    maxWidth: 800,
    maxHeight: 100,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(2),
  },
}));

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selectedFilter, theme) {
  return {
    fontWeight:
      selectedFilter.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ChipSelect = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [tiles, setTiles] = useState([]);
  const [filters, setFilters] = useState([]);

  const handleChange = (event) => {
    const style = event.target.value;
    setSelectedFilter(style);
    props.filterer(style);
  };

  useEffect(() => {
    console.log(props.selection);
    var designTypes = [];
    for (var i = 0; i < props.selection.length; i++) {
      for (var j = 0; j < props.selection[i].style.length; j++) {
        const styleType = props.selection[i].style[j];
        if (!designTypes.includes(styleType)) {
          designTypes.push(styleType);
        }
      }
    }
    setFilters(designTypes);
    setTiles(props.selection);
    console.log(designTypes);
  }, [props]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Filter</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedFilter}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {filters &&
            props.isDesign &&
            filters.map((filter) => (
              <MenuItem
                key={filter}
                value={filter}
                style={getStyles(filter, selectedFilter, theme)}
              >
                {filter}
              </MenuItem>
            ))}
          {filters &&
            !props.isDesign &&
            filters.map((filter) => (
              <MenuItem
                key={filter.designid}
                value={filter.style[0]}
                style={getStyles(filter, selectedFilter, theme)}
              >
                {filter.style[0]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ChipSelect;
