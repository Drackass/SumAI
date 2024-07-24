import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const BtnGithub = () => {
    return ( 
        <a href="https://github.com/Drackass/sumai" target="_blank">
        <Button size="sm" variant={"outline"} className="flex gap-2">
          <Github size={13} />
          Github
        </Button>
      </a>
     );
}
 
export default BtnGithub;