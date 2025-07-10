import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "./Stack";

export type ScreenPropsType<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;
