import { RecipeDetailsType } from "@/types/Recipes";

export function getStepsCount(recipe: RecipeDetailsType): number {
  if (
    !recipe.analyzedInstructions ||
    recipe.analyzedInstructions.length === 0
  ) {
    return 0;
  }

  return recipe.analyzedInstructions.reduce((total, instruction) => {
    return total + instruction.steps.length;
  }, 0);
}

export function getDifficulty(
  readyInMinutes: number,
  stepsCount: number
): "Easy" | "Medium" | "Hard" {
  if (readyInMinutes < 30 && stepsCount < 5) return "Easy";
  if (readyInMinutes < 60) return "Medium";
  return "Hard";
}
