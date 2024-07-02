import { useContext } from "react"
import { TileContext } from "../Context/TileContext"


export const useTile = () => {
  const context = useContext(TileContext);

  if (!context) {
    throw new Error("useTile must be used with in a TileProvider");
  }

  return context;
}