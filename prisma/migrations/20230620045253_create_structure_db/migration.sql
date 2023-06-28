-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "avatarUrl" TEXT,
    "corporateName" TEXT,
    "corporateLogo" TEXT,
    "accountType" TEXT,
    "accessLevel" INTEGER NOT NULL DEFAULT 0,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "reasonBlocking" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborators" (
    "id" TEXT NOT NULL,
    "integrator_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "colaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionValue" DECIMAL(65,30) NOT NULL,
    "formOfPayment_id" TEXT,
    "trialMessage" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextInvoice_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "numberOfPlants" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formOfPayments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "creditCardFlag" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "formOfPayments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "powerPlants" (
    "id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "thirdPartyPowerPlant_id" TEXT NOT NULL,
    "thirdPartyName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "monitorable" BOOLEAN NOT NULL DEFAULT true,
    "classType" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "concessionaire_id" TEXT NOT NULL,
    "concessionaireName" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "excluded" BOOLEAN NOT NULL DEFAULT false,
    "installedPower" DECIMAL(65,30),
    "totalEnergy" DECIMAL(65,30),
    "totalGeneratedEnergy" DECIMAL(65,30),
    "totalConsumedEnergy" DECIMAL(65,30),
    "totalEconomy" DECIMAL(65,30),
    "totalInjectedEnergy" DECIMAL(65,30),
    "environmentCO2" DECIMAL(65,30),
    "environmentTrees" DECIMAL(65,30),
    "performance30Days" DECIMAL(65,30),
    "performance12Days" DECIMAL(65,30),
    "overallPerformance" DECIMAL(65,30),
    "tariffGroup" INTEGER NOT NULL,
    "consumptionClass" INTEGER NOT NULL,
    "tariffModality" INTEGER NOT NULL,
    "supplyType" INTEGER NOT NULL,
    "sceeModality" INTEGER NOT NULL,
    "installed_at" TIMESTAMP(3) NOT NULL,
    "initGeneration_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "powerPlants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "powerPlant_id" TEXT NOT NULL,
    "januaryProduction" DECIMAL(65,30) NOT NULL,
    "februaryProduction" DECIMAL(65,30) NOT NULL,
    "marchProduction" DECIMAL(65,30) NOT NULL,
    "aprilProduction" DECIMAL(65,30) NOT NULL,
    "mayProduction" DECIMAL(65,30) NOT NULL,
    "juneProduction" DECIMAL(65,30) NOT NULL,
    "julyProduction" DECIMAL(65,30) NOT NULL,
    "augustProduction" DECIMAL(65,30) NOT NULL,
    "septemberProduction" DECIMAL(65,30) NOT NULL,
    "octoberProduction" DECIMAL(65,30) NOT NULL,
    "novemberProduction" DECIMAL(65,30) NOT NULL,
    "decemberProduction" DECIMAL(65,30) NOT NULL,
    "averageProduction" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thirdPartyPowerPlants" (
    "id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "monitorable" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "thirdPartyPowerPlants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typePowerPlant" (
    "id" TEXT NOT NULL,
    "powerPlant_id" TEXT NOT NULL,
    "monitoring" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "typePowerPlant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "concessionaires" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "recoverInvoice" BOOLEAN NOT NULL DEFAULT false,
    "group" TEXT NOT NULL,
    "queuedSince" TIMESTAMP(3) NOT NULL,
    "AneelName" TEXT NOT NULL,

    CONSTRAINT "concessionaires_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tariffModalities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "tariffModalities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tariffGroups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "tariffGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consumptionClasses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "consumptionClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplyTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "cd" INTEGER NOT NULL,

    CONSTRAINT "supplyTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sceeModality" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,

    CONSTRAINT "sceeModality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "colaborators_integrator_id_key" ON "colaborators"("integrator_id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborators" ADD CONSTRAINT "colaborators_integrator_id_fkey" FOREIGN KEY ("integrator_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_formOfPayment_id_fkey" FOREIGN KEY ("formOfPayment_id") REFERENCES "formOfPayments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "powerPlants" ADD CONSTRAINT "powerPlants_concessionaire_id_fkey" FOREIGN KEY ("concessionaire_id") REFERENCES "concessionaires"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "powerPlants" ADD CONSTRAINT "powerPlants_thirdPartyPowerPlant_id_fkey" FOREIGN KEY ("thirdPartyPowerPlant_id") REFERENCES "thirdPartyPowerPlants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "powerPlants" ADD CONSTRAINT "powerPlants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_powerPlant_id_fkey" FOREIGN KEY ("powerPlant_id") REFERENCES "powerPlants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typePowerPlant" ADD CONSTRAINT "typePowerPlant_powerPlant_id_fkey" FOREIGN KEY ("powerPlant_id") REFERENCES "powerPlants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
