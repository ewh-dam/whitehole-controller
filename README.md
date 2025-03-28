# Whitehole Controller

## Struttura del Progetto

- `backend/` - Server Node.js
- `frontend/` - Applicazione frontend
- `deploy/` - Script di deployment
- `logs/` - Directory per i log

## Requisiti

- Node.js >= 18
- npm >= 9

## Setup Sviluppo Locale

### Backend

1. Naviga nella directory backend:
   ```bash
   cd backend
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Crea un file `.env` con le variabili d'ambiente:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. Avvia il server in modalità sviluppo:
   ```bash
   npm run dev
   ```

Il server sarà disponibile su http://localhost:3000

### Frontend

La configurazione del frontend verrà aggiunta in seguito.

## Deployment

Per il deployment, consulta la documentazione nella directory `deploy/`. 