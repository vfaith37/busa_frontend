import React from "react";
// import { StyleSheet } from 'react-native';
import { Icon } from "@ui-kitten/components";
import COLORS from "../components/consts/colors";

export const IconSimpleUsageShowcase = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary} name="star" /> ;
export const HomeIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="home" />;
export const MenuIcon = (style) => <Icon {...style} name="menu" />;
export const ArrowIosBackIcon = (style) => <Icon {...style} name="arrow-ios-back" />;
export const InfoIcon = () => <Icon style={{ width: 32, height: 32 }} fill="black"  name="info" />;
export const ShoppingCartIcon = (style) => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary} name="shopping-cart" />;
export const ShoppingBagIcon = (style) => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary} name="shopping-bag" />;
export const ReportIcon = (style) => <Icon {...style} fill={COLORS.primary} name="alert-triangle-outline" />;
export const FeedbackIcon = (style) => <Icon {...style} fill={COLORS.primary} name="file-outline" />;
export const ActivityIcon = (style) => <Icon {...style} name="activity" />;
export const VideoIcon = (style) => <Icon {...style} name="video-outline" />;
export const BellOutlineIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="bell-outline" />;
export const BellIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="bell" />;
export const SettingsIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="settings-outline" />;
export const PersonOutlineIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="person-outline" />;
export const PersonIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="person" />;
export const VolumeIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="volume-up-outline" />;
export const DownloadIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="download" />;
export const ColorPaletteOutlineIcon = () => <Icon style={{ width: 32, height: 32 }} fill={COLORS.primary}  name="color-palette-outline" />;



