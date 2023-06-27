import "@tensorflow/tfjs-backend-cpu";
import { TensorFlowEmbeddings } from "langchain/embeddings/tensorflow";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { CohereEmbeddings } from "langchain/embeddings/cohere";
import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";
import { TransformersEmbeddings } from "./transformer-embedding";

export const embeddings = (embeddingsType: string) => {
  switch (embeddingsType) {
    case "tensorflow":
      return new TensorFlowEmbeddings();
    case "openai":
      return new OpenAIEmbeddings();
    case "cohere":
      return new CohereEmbeddings();
    case "huggingface-api":
      return new HuggingFaceInferenceEmbeddings();
    case "transformer":
      return new TransformersEmbeddings();
    default:
      return new OpenAIEmbeddings();
  }
};
