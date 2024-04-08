import React from "react";
import {
  Drawer,
  DrawerTrigger,
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Separator,
  ScrollArea,
  DrawerFooter,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@project-luth/core";
import { ShoppingCartIcon } from "@project-luth/icons";
import Cart from "~/features/cart";

// export default function SideDrawer(): JSX.Element {
//   return (
//     <Drawer direction={"left"}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Open Drawer</Button>
//       </DrawerTrigger>
//       <DrawerContent className="h-full w-[420px]">
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Citation</DrawerTitle>
//           <DrawerDescription>
//             Make sure to check if the given answer is align with the original
//             source.
//           </DrawerDescription>
//         </DrawerHeader>
//         <Separator />
//         <ScrollArea className="overflow-auto break-all p-4">
//           {Array.from({ length: 10000 }, (_, index) => index + 1)}
//         </ScrollArea>
//         <Separator />
//         <DrawerFooter className="pt-2">
//           <p className="text-sm italic">
//             Thank you for <strong>diligently</strong> double checking!
//           </p>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// }

export default function SheetSide(): JSX.Element {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="sr-only">Shopping cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="w-[420px] sm:w-[540px]">
        {/* /FIXME: Widths not working? */}
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div>
          <Cart />
        </div>
        a
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant="default" className="w-full">
              Go to checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
