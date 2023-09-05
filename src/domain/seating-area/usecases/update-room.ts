import { ErrorClass } from "@presentation/error-handling/api-error";
import { Either } from "monet";
import { SeatingAreaEntity, SeatingAreaModel } from "../entities/seatingArea";
import { SeatingAreaRepository } from "../repositories/seatingArea-repository";

export interface UpdateSeatingAreaUsecase {
  execute: (
    seatingAreaId: string,
    seatingAreaData: SeatingAreaModel
  ) => Promise<Either<ErrorClass, SeatingAreaEntity>>;
}

export class UpdateSeatingArea implements UpdateSeatingAreaUsecase {
  private readonly seatingAreaRepository: SeatingAreaRepository;

  constructor(seatingAreaRepository: SeatingAreaRepository) {
    this.seatingAreaRepository = seatingAreaRepository;
  }

  async execute(
    seatingAreaId: string,
    seatingAreaData: SeatingAreaModel
  ): Promise<Either<ErrorClass, SeatingAreaEntity>> {
    return await this.seatingAreaRepository.updateSeatingArea(
      seatingAreaId,
      seatingAreaData
    );
  }
}
