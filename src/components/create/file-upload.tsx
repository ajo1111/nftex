"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  isUploading: boolean;
}

export function FileUpload({ onFileUpload, isUploading }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-12 text-center ${isDragging ? "border-purple-600 bg-purple-600/5" : "border-purple-600/30"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,video/*,audio/*,.glb,.gltf"
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-purple-600/10 p-4">
          <Upload className="h-8 w-8 text-purple-600" />
        </div>
        <div>
          <p className="text-lg font-medium">Drag and drop file</p>
          <p className="text-sm text-muted-foreground">or click to browse</p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
        >
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
              Uploading...
            </>
          ) : (
            "Select File"
          )}
        </Button>
      </div>
    </div>
  );
}
