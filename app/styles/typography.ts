import { TextStyle } from "react-native";
import { moderateScale } from "app/utils/scale";

type HeadingFontSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextFontSize = "default" | "large" | "medium" | "small" | "tiny";

type HeadingTypography = {
  [key in HeadingFontSize]: TextStyle;
};

type TextTypography = {
  [key in TextFontSize]: TextStyle;
};

// ---------------Text----------------
export const text: TextTypography = {
  default: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    letterSpacing: 0,
  },
  large: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
  },
  medium: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    letterSpacing: 0,
  },
  small: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
  },
  tiny: {
    fontSize: moderateScale(8),
    lineHeight: moderateScale(16),
    letterSpacing: -0.1,
  },
};

// -------------------Heading-------------------
export const heading: HeadingTypography = {
  h1: {
    fontSize: moderateScale(34),
    lineHeight: moderateScale(42),
    letterSpacing: -0.25,
  },
  h2: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(34),
    letterSpacing: -0.25,
  },
  h3: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    letterSpacing: -0.25,
  },
  h4: {
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    letterSpacing: -0.25,
  },
  h5: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    letterSpacing: -0.25,
  },
  h6: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
  },
};

// -------------------Text Alignment-------------------

export const alignLeft: TextStyle = {
  textAlign: "left",
};

export const alignRight: TextStyle = {
  textAlign: "right",
};

export const alignCenter: TextStyle = {
  textAlign: "center",
};
