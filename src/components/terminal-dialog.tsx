
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { InteractiveTerminal } from "./interactive-terminal"
import { useState } from "react"

export function TerminalDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="fixed bottom-8 left-8 z-50 rounded-full h-14 w-14 p-0"
          aria-label="Open interactive terminal"
        >
          <Terminal className="h-7 w-7" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px] h-[60vh] flex flex-col p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Interactive Terminal</DialogTitle>
        </DialogHeader>
        <InteractiveTerminal onExit={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
