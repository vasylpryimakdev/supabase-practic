"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";

interface PlanFormProps {
  formType?: "add" | "edit";
  initialValues?: any;
}

function PlanForm({ formType, initialValues }: PlanFormProps) {
  const [selectedMediaFiles = [], setSelectedMediaFiles] = useState<any[]>([]);

  const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    description: z.string().nonempty("Description is required"),
    features: z.array(z.string()).nonempty("Features is required"),
    monthly_price: z.number(),
    quarterly_price: z.number(),
    half_yearly_price: z.number(),
    yearly_price: z.number(),
  });

  const form: any = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialValues?.name || "",
      description: initialValues?.description || "",
      features: initialValues?.features || [],
      monthly_price: initialValues?.monthly_price || 0,
      quarterly_price: initialValues?.quarterly_price || 0,
      half_yearly_price: initialValues?.half_yearly_price || 0,
      yearly_price: initialValues?.yearly_price || 0,
    },
  });

  async function onSubmit(values: any) {
    console.log(values);
  }

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "features",
  });

  const pricingFields = [
    "monthly_price",
    "quarterly_price",
    "half_yearly_price",
    "yearly_price",
  ];

  return (
    <div className="mt-7">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <fieldset className="p-5 border border-gray-400">
            <legend className="bg-white px-5 text-sm">Features</legend>

            <div className="flex flex-col gap-5">
              {fields.map((field, index) => (
                <FormField
                  control={form.control}
                  name={`features.${index}`}
                  key={field.id}
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-5">
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={() => remove(index)}
                        variant={"outline"}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => append("")}
              type="button"
              className="mt-7"
            >
              Add Feature
            </Button>
          </fieldset>

          <fieldset className="p-5 border border-gray-400">
            <legend className="bg-white px-5 text-sm">Pricing</legend>

            <div className="grid grid-cols-4 gap-5">
              {pricingFields.map((item, index) => (
                <FormField
                  control={form.control}
                  name={item}
                  key={item}
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-xs">
                        {item.replace("_", " ").toUpperCase()}
                      </label>
                      <FormControl>
                        <Input
                          placeholder=""
                          {...field}
                          onChange={(e) => {
                            field.onChange(parseFloat(e.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-3">
            <FormLabel className="block">Images</FormLabel>
            <Input
              type="file"
              multiple
              onChange={(e: any) => {
                setSelectedMediaFiles([
                  ...selectedMediaFiles,
                  ...e.target.files,
                ]);
              }}
            />
          </div>

          <div className="flex justify-end gap-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PlanForm;
