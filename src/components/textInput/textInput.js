import React from "react";
import { Box, TextField } from "@mui/material";

import styles from "./textInput.module.css";

function TextInput({
  label,
  value,
  placeholder,
  onChange,
  variant,
  size,
  height,
  opacity = "0.2",
  ...rest
}) {
  return (
    <Box className={styles.container}>
      <span className={styles.label}>{label}</span>
      <TextField
        sx={{
          height,
          bgcolor: `rgba(255, 255, 255, ${opacity})`,
          borderRadius: 2,
          "& .MuiInputBase-root": {
            borderRadius: 2,
            height,
          },
          "& input": {
            height: "100%",
            padding: "10px",
            color: "white",
            fontWeight: "bold",
          },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        }}
        variant={variant}
        size={"small"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth
        {...rest}
      />
    </Box>
  );
}

export default TextInput;
