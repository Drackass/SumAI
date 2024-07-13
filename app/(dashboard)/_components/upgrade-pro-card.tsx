import UpgradePlanModal from "@/components/modals/upgrade-plan-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function UpgradeProCard() {
  return (
    <Card>
      <CardHeader className=" md:pt-0 md:p-4">
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>
          Unlock all features and get unlimited access to our support team.
        </CardDescription>
      </CardHeader>
      <CardContent className="md:p-4 md:pt-0">
        <UpgradePlanModal>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </UpgradePlanModal>
      </CardContent>
    </Card>
  );
}
