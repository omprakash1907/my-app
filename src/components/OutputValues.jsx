import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function OutputValues() {
  const [selectedPlan, setSelectedPlan] = useState("Plan 250 - 250 TH/s");
  const [planCount, setPlanCount] = useState(11);
  const [months, setMonths] = useState(9);
  const [btcPrice, setBtcPrice] = useState(40583.2);
  const [investment, setInvestment] = useState(20019.87);
  const [estimatedIncome, setEstimatedIncome] = useState(21102.11);
  const [roi, setRoi] = useState(104.51);

  // Calculate values when inputs change
  useEffect(() => {
    // This would normally calculate based on actual formulas
    // For demo purposes, we're using static values from the image
    setInvestment(20019.87);
    setEstimatedIncome(21102.11);
    setRoi(104.51);
  }, [selectedPlan, planCount, months, btcPrice]);

  const returnValue = 104.51

  return (
    <div className="w-full container mx-auto px-4">
      <div className="font-bold text-gray-500">ROI CALCULATOR</div>
      <div className="bg-white">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          See your potential.
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select a plan</label>
              <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plan 250 - 250 TH/s">
                    Plan 250 - 250 TH/s
                  </SelectItem>
                  <SelectItem value="Plan 500 - 500 TH/s">
                    Plan 500 - 500 TH/s
                  </SelectItem>
                  <SelectItem value="Plan 1000 - 1000 TH/s">
                    Plan 1000 - 1000 TH/s
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">How many plans?</label>
                <span className="text-sm text-gray-500">Maximum: 20</span>
              </div>
              <Slider
                value={[planCount]}
                min={1}
                max={20}
                step={1}
                onValueChange={(value) => setPlanCount(value[0])}
                className="py-4"
              />
              <div className="inline-block bg-slate-800 text-white text-xs font-medium px-3 py-1">
                {planCount} PLANS
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">How many months?</label>
                <span className="text-sm text-gray-500">Maximum: 12</span>
              </div>
              <Slider
                value={[months]}
                min={1}
                max={12}
                step={1}
                onValueChange={(value) => setMonths(value[0])}
                className="py-4"
              />
              <div className="inline-block bg-slate-800 text-white text-xs font-medium px-3 py-1">
                {months} MONTHS
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">
                  BTC Price Forecast
                </label>
                <span className="text-sm text-gray-500">24th October 2024</span>
              </div>
              <Input
                type="number"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number.parseFloat(e.target.value))}
                className="w-full"
                prefix="$"
              />
            </div>

            <div className="bg-gray-100 p-3 rounded">
              <div className="text-xs text-gray-500">PRICE OF HASHRATE</div>
              <div className="text-sm font-medium">0.049,683 USD/TH/Day</div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <Card className="p-6 border rounded-md flex flex-col ">
              <div>
                <div className="text-sm font-bold text-gray-500">
                  HASHRATE FEE
                </div>
                <div className="text-3xl font-bold mb-6">
                  $
                  {investment.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className="flex justify-center items-center w-full p-6">
                <div className="relative w-64 h-64">
                  {/* Outermost ring - light blue (10px) */}
                  <div className="absolute inset-0 rounded-full border-[10px] border-[#ADD8E6]"></div>

                  {/* Middle ring - white (20px) - offset by 10px to show light blue outer */}
                  <div
                    className="absolute rounded-full border-[20px] border-white"
                    style={{
                      top: "20px",
                      left: "20px",
                      right: "20px",
                      bottom: "20px",
                    }}
                  ></div>

                  {/* Innermost ring - dark blue (30px) - offset by 30px to show white middle */}
                  <div
                    className="absolute rounded-full border-[20px] border-[#2F4F7F]"
                    style={{
                      top: "20px",
                      left: "20px",
                      right: "20px",
                      bottom: "20px",
                    }}
                  ></div>

                  {/* Text display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="text-xs text-[#333333] mb-1"
                      style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                      MINING RETURN
                    </div>
                    <div
                      className="text-2xl font-bold text-[#333333]"
                      style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                      {returnValue.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 w-full gap-4">
                <div className="text-center">
                  <div className="text-xs text-gray-500">Investments</div>
                  <div className="font-bold">
                    $
                    {investment.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Estimated Income</div>
                  <div className="font-bold">
                    $
                    {estimatedIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-[#663AB6] to-[#BB3AB1] text-white py-2 mt-4">
                View our Plans
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
