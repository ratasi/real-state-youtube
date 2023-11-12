import { Map } from "leaflet";

export type MarkerHouseProps = {
  selectMarker: (position: positionType, fn: fnType) => void;
};

type positionType = {
  lat: number;
  lng: number;
};

type fnType = Map;
