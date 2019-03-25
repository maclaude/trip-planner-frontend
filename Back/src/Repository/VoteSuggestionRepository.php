<?php

namespace App\Repository;

use App\Entity\VoteSuggestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method VoteSuggestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method VoteSuggestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method VoteSuggestion[]    findAll()
 * @method VoteSuggestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoteSuggestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, VoteSuggestion::class);
    }

    // /**
    //  * @return VoteSuggestion[] Returns an array of VoteSuggestion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VoteSuggestion
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
