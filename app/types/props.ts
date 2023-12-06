import { ViewStyle } from "react-native";

export type IconName =
  | "bell"
  | "book"
  | "calendar"
  | "camera"
  | "check"
  | "chevron-down-small"
  | "chevron-left-large"
  | "chevron-left-medium"
  | "chevron-left-small"
  | "chevron-right-large"
  | "chevron-right-medium"
  | "chevron-right-small"
  | "chevron-up-small"
  | "chevron-right"
  | "check-mark-outlined"
  | "close"
  | "comment"
  | "crown"
  | "edit"
  | "ellipsis"
  | "email"
  | "expand"
  | "eye-closed"
  | "eye"
  | "facebook-filled"
  | "google-filled"
  | "heart-filled"
  | "heart-filled-white"
  | "heart"
  | "home"
  | "import"
  | "info"
  | "lock"
  | "minus"
  | "move"
  | "pause"
  | "phone"
  | "play"
  | "plus"
  | "question-mark"
  | "save"
  | "search"
  | "settings"
  | "share"
  | "shield"
  | "shopping-bag"
  | "stop"
  | "trash"
  | "user-filled"
  | "user-group"
  | "user"
  | "warning"
  | "book-shelf"
  | "community-navIcon"
  | "home-navIcon"
  | "christmas"
  | "christmas-label"
  | "codeScan"
  | "sort"
  | "goodreads"
  | "post"
  | "diamond"
  | "reload"
  | "music"
  | "poll"
  | "clock"
  | "clock-hands"
  | "check-mark"
  | "dot"
  | "pbbook"
  | "ebook";

export type IconProps = StyleProp & {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
};

export type StyleProp = {
  style?: ViewStyle;
};

export type ModalHeaderProps = StyleProp & {
  title: string;
  left: React.ReactNode;
  right?: React.ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};
