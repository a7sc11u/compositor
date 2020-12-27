import { useDrop, DropTargetMonitor } from "react-dnd";

export const useDropNode = (
  accept: string | string[],
  canDrop: boolean = true
) => {
  const [{ isOver }, drop] = useDrop({
    accept,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      if (!monitor.isOver()) {
        return;
      }

      console.log(item);
    },
    canDrop: () => canDrop,
  });

  return { drop, isOver };
};
